'use client'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useChat } from 'ai/react';
import { ScrollArea } from "@/components/ui/scroll-area";
import userAvatar from "@/assets/avatar.png";
import aiAvatar from "@/assets/ai_avatar.png";
import Image from "next/image";


export function Chat() {

  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <Card className="w-[500px] grid grid-rows-[min-content_1fr_min-content]">
        <CardHeader>
          <CardTitle>Chat AI</CardTitle>
          <CardDescription>Chat bot experimental</CardDescription>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[400px] w-full pr-4">
          {messages.map(message => {
            return (
              <div key={message.id} className="flex gap-3 text-slate-600 text-sm mb-4">
                {message.role === 'assistant' && (
              <Avatar>
                <Image src={aiAvatar} alt="AI" />
              </Avatar>  
                )}

                {message.role === 'user' && (     
              <Avatar>
                <Image src={userAvatar} alt="User" />
              </Avatar>
                )}
              <p className="leading-relaxed">
                <span className="block font-bold text-slate-700">
                  {message.role === 'assistant' ? 'AI' : 'Você'}
                  </span>
                {message.content}
              </p>
            </div>
            )
          })}
          </ScrollArea>
        </CardContent>
        <CardFooter>
          <form className="w-full flex gap-2" onSubmit={handleSubmit}>
          <Input placeholder="Como posso ajudar?" value={input} onChange={handleInputChange}/>
          <Button type="submit">Enviar</Button>
          </form>
        </CardFooter>
      </Card>
  )
}


