import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import Chat from "./Chat"
import ScanQR from "./ScanQR"


export function TabsDemo() {
  return (
 <div className="w-full flex items-center justify-center">
     <Tabs defaultValue="account" className="w-3/4">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="account">Chat Assist</TabsTrigger>
        <TabsTrigger value="password">Know Your Food</TabsTrigger>
        <TabsTrigger value="monitor">Health Monitor</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
         <Chat/>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Know your food </CardTitle>
            <CardDescription>
              Get a brief description of the food you are about to eat of package using barcode.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
           <ScanQR/>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="monitor">
        <Card>
         <Chat/>
        </Card>
      </TabsContent>
    </Tabs>
 </div>
  )
}