'use client'

import { useChat } from "ai/react"
import { useEffect, useRef } from "react"
import Textarea from "react-textarea-autosize"

export default function Home() {

  const {messages, input, handleInputChange, handleSubmit} = useChat({
    api: '/api'
  })

  const messageEndRef = useRef<HTMLInputElement>(null);
  const scrollToBottom = () => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth'})
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages])

  return (
    <div className="min-h-screen bg-neutral-800">
      {
      messages.length !==0 ? (
        <div className="pb-32 pt-5 space-y-5 w-[75%] mx-auto relative">
          {messages.map((message) => (
            <div key={message.id} className="w-full">
              {
                message.role === 'user' ? 
                <div className="flex gap-x-2">
                  <div className="bg-gray-500 h-12 w-12 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-white p-1">
  <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clip-rule="evenodd" />
</svg>

                  </div>

                    <p className="rounded-lg p-3 w-full border-gray-500 border-2 text-sm whitespace-pre">
                      {message.content}
                    </p>

                </div>
                : 
                <div className="flex gap-x-2">
                  <div className="bg-teal-500 h-12 w-12 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-teal p-1">
  <path d="M10.5 18.75a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" />
  <path fill-rule="evenodd" d="M8.625.75A3.375 3.375 0 005.25 4.125v15.75a3.375 3.375 0 003.375 3.375h6.75a3.375 3.375 0 003.375-3.375V4.125A3.375 3.375 0 0015.375.75h-6.75zM7.5 4.125C7.5 3.504 8.004 3 8.625 3H9.75v.375c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125V3h1.125c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-6.75A1.125 1.125 0 017.5 19.875V4.125z" clip-rule="evenodd" />
</svg>


                  </div>

                    <p className="rounded-lg p-3 w-full border-teal-500 border-2 text-sm">
                      {message.content}
                    </p>

                </div>
              }
            </div>
          ))}
        </div>
      ) : ( <div className="w-full flex justify-center pt-28">
        <h1 className="font-bold text-2xl text-white">
         Please Type your question
        </h1>
      </div>)
    }
    <div ref={messageEndRef}></div>
    <form onSubmit={handleSubmit} className="p-5 fixed bottom-0 w-[75%] bg-neutral-800">
      <div className="relative flex items-center">
        <Textarea 
        tabIndex ={0}
        required
        rows={1}
        value={input}
        onChange={handleInputChange}
        autoFocus
        placeholder='Send message'
        spellCheck={false}
        className="w-full focus:outline-none shadow-teal-600 shadow-xl placeholder:text-gray-200 text-white p-5 pr-16 rounded-xl bg-neutral-600 text-2xl"
        />
<button type="submit" className="absolute bg-teal-500 p-2 rounded-lg right-0 mr-5 hover:shadow-white hover:shadow-sm">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
</svg>


</button>
      </div>
    </form>


    </div>
  )
}
