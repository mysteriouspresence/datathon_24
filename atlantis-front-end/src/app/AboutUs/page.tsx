import React from 'react'
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
    <div className="h-100 mt-[200px] flex flex-col justify-center space-y-4">

    <Card className="w-[280px] relative rounded border-2 opacity-80 p-1">
      <CardHeader>
        <CardTitle className="text-white mx-auto">Chelsea</CardTitle>
        <CardDescription className="text-white m-auto">Is the best at everything</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label className="text-white mx-auto" htmlFor="name">Languages</Label>
              <Label className="text-white mx-auto">Rust C/C++ Python</Label>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Framework</Label>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        
      </CardFooter>
    </Card>

    <Card className="w-[280px] relative rounded border-2 opacity-80 p-1">
      <CardHeader>
        <CardTitle className="text-white mx-auto">Priyansh</CardTitle>
        <CardDescription className="text-white m-auto">Is the best at everything</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label className="text-white mx-auto" htmlFor="name">Languages</Label>
              <Label className="text-white mx-auto">Rust C/C++ Python NextJs</Label>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Framework</Label>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        
      </CardFooter>
    </Card>

    <Card className="w-[280px] relative rounded border-2 opacity-80 p-1 my-1">
      <CardHeader>
        <CardTitle className="text-white mx-auto">Daniel</CardTitle>
        <CardDescription className="text-white m-auto">Is the best at everything</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label className="text-white mx-auto" htmlFor="name">Languages</Label>
             
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Framework</Label>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        
      </CardFooter>
    </Card>
    </div>
  )
}

export default page