import React from 'react'
import Image from 'next/image'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


function page() {
  return (
    <div className="h-100 mt-[200px] flex flex-col place-items-center space-y-4 overflow-y-auto">

    <Card className="w-[320px] relative rounded border-2 opacity-80 p-1">
      <CardHeader>
        <CardTitle className="text-white mx-auto">Chelsea</CardTitle>
        <CardDescription className="text-white mx-auto px-2">Freshman studying Electrical Engineering. Is experienced with cleaning and organizing data, which has sharpened her Rust and algorithm creation abilities. Was able to use programming skills in Rust and Excel, and knowledge to collate the data and visualize it.</CardDescription>
      </CardHeader>
      <Image className="m-auto rounded-full" src="/asset/mp.jpg" width={75} height={75} alt='profile pic'></Image>
      <CardContent>
       
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label className="text-white mx-auto" htmlFor="name">Languages</Label>
              <Label className="text-white mx-auto">Rust C/C++ Python</Label>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>

    <Card className="w-[320px] relative rounded border-2 opacity-80 p-1">
      <CardHeader>
        <CardTitle className="text-white mx-auto">Priyansh</CardTitle>
        <CardDescription className="text-white m-auto p-1">Freshman studying Computer Science. Has utilized various languages and knowledge in Computer Science to work on diver projects. Used programming skills to create a website to display results and helped problem-solve throughout the project in terms of visualizing the data.</CardDescription>
      </CardHeader>
      <Image className="m-auto rounded-full" src="/asset/p4444.jpeg" width={75} height={75} alt='profile pic'></Image>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label className="text-white mx-auto" htmlFor="name">Languages</Label>
              <Label className="text-white mx-auto">Rust C/C++ Python Typescript</Label>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>

    <Card className="w-[320px] relative rounded border-2 opacity-80 p-1 my-1">
      <CardHeader>
        <CardTitle className="text-white mx-auto">Daniel</CardTitle>
        <CardDescription className="text-white m-auto">Is a math student who enjoys learning about anything computer science related. Worked on some frontend and tried learning some Rust.</CardDescription>
      </CardHeader>
      <Image className="m-auto rounded-full" src="/asset/dz11.jpeg" width={75} height={75} alt='profile pic'></Image>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label className="text-white mx-auto" htmlFor="name">Languages</Label>
              <Label className="text-white mx-auto">C++ Python Java</Label>
            </div>
    
          </div>
        </form>
      </CardContent>
    
    </Card>
    </div>
  )
}

export default page;

export default page
