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

    <Card className="w-[280px] relative rounded border-2 opacity-80 p-1">
      <CardHeader>
        <CardTitle className="text-white mx-auto">Chelsea</CardTitle>
        <CardDescription className="text-white mx-auto px-2">Is experienced with cleaning and organizing data. Was able to use programming skills in Rust and Excel, and knowledge to produce manageable data.</CardDescription>
      </CardHeader>
      <CardContent>
        <Image src="/asset/mp.png" width={50} height={50} alt='profile pic'></Image>
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

    <Card className="w-[280px] relative rounded border-2 opacity-80 p-1">
      <CardHeader>
        <CardTitle className="text-white mx-auto">Priyansh</CardTitle>
        <CardDescription className="text-white m-auto p-1">Has a wide breadth of knowledge in Computer Science. Used programming skills to create a website to display results and helped problem shoot throughout the project.</CardDescription>
      </CardHeader>
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

    <Card className="w-[280px] relative rounded border-2 opacity-80 p-1 my-1">
      <CardHeader>
        <CardTitle className="text-white mx-auto">Daniel</CardTitle>
        <CardDescription className="text-white m-auto">Enjoys learning about anything computer science.</CardDescription>
      </CardHeader>
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

export default page