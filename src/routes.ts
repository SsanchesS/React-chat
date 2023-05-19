import React from "react"
import { CHAT_ROUTE, LOGIN_ROUTE } from "./utils/consts"

interface IRoutes{
   path:string
}
export const publicRoutes:IRoutes[]=[
   {
      path:LOGIN_ROUTE
   },
]
export const authRoutes:IRoutes[]=[
   {
      path:CHAT_ROUTE
   },
]