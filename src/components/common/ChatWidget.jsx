// src/components/common/ChatWidget.jsx
'use client'

import { useEffect } from 'react'
import { useUser } from '@clerk/nextjs'
import Script from 'next/script'

export default function ChatWidget() {
  const { user, isLoaded } = useUser()
  
  useEffect(() => {
    // Only run when user data is loaded
    if (!isLoaded) return

    // Wait for Tawk_API to be available and ready
    const updateTawkAttributes = () => {
      if (typeof window !== 'undefined' && 
          window.Tawk_API && 
          typeof window.Tawk_API.setAttributes === 'function') {
        
        const userName = user?.fullName || user?.firstName || 'Guest User'
        const userEmail = user?.primaryEmailAddress?.emailAddress || 'guest@example.com'
        
        window.Tawk_API.setAttributes({
          name: userName,
          email: userEmail,
          userId: user?.id || 'guest'
        }, function(error) {
          if (error) {
            console.error('Error setting Tawk.to attributes:', error)
          }
        })
      }
    }

    // If Tawk is already loaded, update immediately
    if (window.Tawk_API && typeof window.Tawk_API.setAttributes === 'function') {
      updateTawkAttributes()
    } else {
      // Otherwise, wait for it to load
      const checkInterval = setInterval(() => {
        if (window.Tawk_API && typeof window.Tawk_API.setAttributes === 'function') {
          clearInterval(checkInterval)
          updateTawkAttributes()
        }
      }, 100)

      // Cleanup interval after 10 seconds
      setTimeout(() => clearInterval(checkInterval), 10000)

      return () => clearInterval(checkInterval)
    }
  }, [user, isLoaded])

  // Get user info for initial script load
  const userName = user?.fullName || user?.firstName || 'Guest User'
  const userEmail = user?.primaryEmailAddress?.emailAddress || 'guest@example.com'

  return (
    <>
      {/* Tawk.to Live Chat Script */}
      <Script 
        id="tawk-to-chat-widget" 
        strategy="lazyOnload"
      >
        {`
          var Tawk_API = Tawk_API || {};
          var Tawk_LoadStart = new Date();

          // Suppress cookie errors
          (function() {
            var originalError = console.error;
            console.error = function() {
              if (arguments[0] && typeof arguments[0] === 'string' && 
                  arguments[0].includes('Unable to store cookie')) {
                return;
              }
              originalError.apply(console, arguments);
            };
          })();

          // Set initial visitor data
          Tawk_API.visitor = {
            name: '${userName}',
            email: '${userEmail}'
          };

          // Customize widget appearance
          Tawk_API.customStyle = {
            visibility : {
              desktop : {
                position : 'br',
                xOffset : 20,
                yOffset : 20
              },
              mobile : {
                position : 'br',
                xOffset : 10,
                yOffset : 10
              }
            }
          };

          // Callback when Tawk loads
          Tawk_API.onLoad = function() {
            console.log('Tawk.to chat loaded successfully');
          };

          // Load Tawk.to script
          (function(){
            var s1 = document.createElement("script");
            var s0 = document.getElementsByTagName("script")[0];
            s1.async = true;
            s1.src = 'https://embed.tawk.to/695267c63169ac197f3fc2fd/1jdkuao3d';
            s1.charset = 'UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1,s0);
          })();
        `}
      </Script>
    </>
  )
}