import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  InstagramIcon,
  PhoneIcon,
} from "lucide-react";

import { siteConfig } from "@/config/site";
import { plants } from "@/data/plants";
import { cn } from "@/lib/utils";
import { PlantImage } from "@/utils/plant-image";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Home",
  description: siteConfig.description,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/og/og.png`,
        width: 1920,
        height: 1080,
      },
    ],
  },
}

export default function Home() {
  return (
    <main className="flex flex-col w-11/12 pt-8 pb-20 max-w-[1200px] mx-auto">
      <div className="flex flex-col justify-center items-center">
        <Avatar className="w-24 h-24">
          <AvatarImage src="/logo.svg" />
          <AvatarFallback>MJ</AvatarFallback>
        </Avatar>

        <h1 className="font-semibold text-2xl mt-4">Meu Jardim Aju</h1>
        <h2 className="font-medium mt-2">Loja de Plantas</h2>

        <div className="flex gap-2 mt-8">
          <Link
            href="https://api.whatsapp.com/send?phone=5579981289628"
            target="_blank"
            className={cn(buttonVariants({ variant: "outline" }), "w-10 h-10 p-0 rounded-full hover:text-background")}
          >
            <PhoneIcon width={20} height={20} />
          </Link>
          <Link
            href="https://www.instagram.com/meujardim_aju"
            target="_blank"
            className={cn(buttonVariants({ variant: "outline" }), "w-10 h-10 p-0 rounded-full hover:text-background")}
          >
            <InstagramIcon width={20} height={20} />
          </Link>
        </div>
      </div>
      <div className="mt-16">
        <h3 className="font-bold text-3xl mb-6">🪴 Plantas</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
          {plants.map((plant) => (
            <Card key={plant.name + plant.price}>
              <CardHeader>
                <Image
                  src={PlantImage(plant.image)}
                  alt={plant.name}
                  fill
                  className="!relative w-full h-full rounded-md 
                        aspect-[1/1] object-cover"
                />
              </CardHeader>
              <CardContent>
                <CardTitle className="font-semibold text-lg min-h-[3.5rem] line-clamp-2 webkit-line-clamp-2">
                  {plant.name}
                </CardTitle>

                {plant.stock ? (
                  <div className="h-[22px]" />
                ) : (
                  <Badge variant="default" className="text-muted bg-muted-foreground">
                    Esgotado
                  </Badge>
                )}

                <p className="text-lg font-medium mt-2">R$ {plant.price.toFixed(2)}</p>
              </CardContent>
              <CardFooter>
                <Link
                  href="https://api.whatsapp.com/send?phone=5579981289628"
                  className={cn(buttonVariants({ variant: "default" }), "w-full")}
                >
                  WhatsApp
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
