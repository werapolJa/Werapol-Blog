import { Copy, Facebook, Linkedin, Twitter, Smile } from "lucide-react"
import { User } from "lucide-react"
import { useState } from "react";
import { Toaster, toast } from 'sonner'

import { Button } from "@/components/ui/button"

function PostComment() {


  const copyToClipboard = () => {

    const url = window.location.href; // URL of the current page
    console.log(url);

    navigator.clipboard.writeText(url)
      .then(() => toast("Copied!", {
        description: "This article has been copied to your clipbord",
        action: {
          label: "Undo",

        }, style: {
          background: 'rgb(55,203,105)',
          color: 'white',

        },
      }))
      .catch(() => toast('Failed to copy URL'));
  };

  return (
    <>

      <div className="w-full col-span-2 bp-4  rounded-lg shadow-sm  ">
        <div className="flex items-center justify-between mb-4 bg-[#EFEEEB] h-20 p-10 rounded-xl">
          <button className="inline-flex items-center px-3 py-1.5 bg-gray-50 hover:bg-gray-100 rounded-full text-sm  ">
            <Smile className="w-4 h-4 mr-2 text-yellow-500 " />
            <span className="font-medium">321</span>
          </button>
          <div className="flex items-center gap-2">
            <button className="inline-flex items-center px-3 py-1.5 bg-gray-50 hover:bg-gray-100 rounded-full text-sm transition-colors"
              onClick={copyToClipboard}>

              <Copy className="w-4 h-4 mr-2" />
              Copy link
            </button>
            <div className="flex gap-1">
              <button className="p-2 bg-[#1877F2] hover:bg-[#1877F2]/90 text-white rounded-full transition-colors">
                <Facebook className="w-4 h-4" />
                <span className="sr-only">Share on Facebook</span>
              </button>
              <button className="p-2 bg-[#0A66C2] hover:bg-[#0A66C2]/90 text-white rounded-full transition-colors">
                <Linkedin className="w-4 h-4" />
                <span className="sr-only">Share on LinkedIn</span>
              </button>
              <button className="p-2 bg-[#1DA1F2] hover:bg-[#1DA1F2]/90 text-white rounded-full transition-colors">
                <Twitter className="w-4 h-4" />
                <span className="sr-only">Share on Twitter</span>
              </button>
            </div>
          </div>
        </div>


        <div className="mb-4">
          <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-2">
            Comment
          </label>
          <textarea
            id="comment"
            rows={3}
            className="w-full px-3 py-2 border border-gray-200 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="What are your thoughts?"
          />
          <div className="flex justify-end mt-2">
            <button className="px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
              Send
            </button>
          </div>
        </div>
      </div>

      {/* div พื่นที่ว่างข้างขวา */}
      <div></div>


      <div className="w-full p-4 space-y-6 col-span-2">

        <div className="flex gap-4">
          <div className="h-10 w-10">
            <img src="/placeholder.svg" alt="Jacob Lash" />
            <User className="h-6 w-6" />

          </div>
          <div className="flex-1 space-y-1">
            <div className="flex items-center gap-2">
              <span className="font-medium">Jacob Lash</span>
              <span className="text-sm text-muted-foreground">12 September 2024 at 16:30</span>
            </div>
            <p className="text-sm text-muted-foreground">
              I loved this article! It really explains why my cat is so independent yet loving. The purring section was super interesting.
            </p>
          </div>
          <Toaster />


        </div>



      </div>
    </>

  )
} export default PostComment;