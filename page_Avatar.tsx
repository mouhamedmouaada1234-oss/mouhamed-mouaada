import { Button } from "@/components/ui/button";
import React, { useRef, useState } from "react";
import { Card, CardDescription } from "@/components/ui/card";
import {Avatar,AvatarImage,AvatarFallback} from "@/components/ui/avatar"
export default function Home() {
  return (
    <div className="p-10">
       <div className="p-10">
      <Avatar>
        <AvatarImage src="https://i.pravatar.cc/150" alt="@user" />
        <AvatarFallback>MM</AvatarFallback>
      </Avatar>
    </div>
    </div>
    
  );
}
