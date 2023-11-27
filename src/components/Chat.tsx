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
    <div className="w-[900px] flex gap-2 flex-col">
    <Card className="grid grid-rows-[min-content_1fr_min-content]">
        <CardHeader>
          <CardTitle>Chat IA</CardTitle>
          <CardDescription>O que sabemos é uma gota, o que ignoramos é um oceano.</CardDescription>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[230px] w-full pr-4">
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
                  {message.role === 'assistant' ? 'Miss Minutes' : 'Você'}
                  </span>
                {message.content}
              </p>
            </div>
            )
          })}
          </ScrollArea>
        </CardContent>
        <CardFooter>
          <form className="w-full flex gap-2 flex-col" onSubmit={handleSubmit}>
          <Input placeholder="Como posso ajudar?" value={input} onChange={handleInputChange}/>
          <Button className="size-sm" type="submit">Enviar</Button>
          </form>
        </CardFooter>
      </Card>
        <p className="text-slate-600 text-sm text-center mt-10">
        © 2023 Cleginaldo Bandeiras. Todos os direitos reservados.
        </p>
    </div>
  )
}


