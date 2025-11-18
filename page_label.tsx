"use client"
import {Label} from "@/components/label"

export default function Page() {
  return (
    <div className="p-4 space-y-4">
      <div className="flex flex-col space-y-2">
        <Label htmlFor="email">Email Address</Label>
        <input
          id="email"
          className="border p-2 rounded"
          placeholder="Enter your email"
        />
      </div>
    </div>
  )
}
