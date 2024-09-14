"use client";

import React, { useEffect, useState } from "react"; // Add this import statement
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import axios from "axios";
import { useParams } from "next/navigation";

type Props = {}

export default function BlogPage(Props: Props) {

    const [data, setData] = useState([]);
    const path_id = useParams();
    console.log(path_id.id);
    

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`http://localhost:5000/api/posts/${path_id.id}`);
          setData(response.data);
          console.log(response.data);
          
        } catch (error) {
          console.log(error);
        }
      };
    
      fetchData();
    }, [path_id]);

  return (
    <div className="w-full min-h-72 flex flex-col gap-4 mb-8">
        <div className="bg-gradient-to-r from-blue-400 via-blue-300 to-blue-50 p-2 rounded-lg">
          <h1 className="text-5xl font-extrabold">
            {data.title}
            </h1>
          <div className="flex items-center justify-start gap-2 text-lg">
            <Avatar className="h-8 w-8">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <span className="font-medium">Xander</span>
            {" | "}
            <span className="font-base">05 September, 2021</span>
          </div>
        </div>
        <article className="max-w-none prose md:prose-lg lg:prose-xl">
        <h2>Sweating: A Healthy Gesture to Stay Fit</h2>
    <p>
      When we think about fitness, we often focus on the exercises and workouts.
      However, one of the key indicators of a good workout and overall health is
      something we often overlook: sweating. Here’s why sweating is not just
      normal, but beneficial for your fitness journey:
    </p>
    <h3>The Benefits of Sweating</h3>
    <ol>
      <li>
        <p>
          <strong>Regulates Body Temperature</strong>: Sweating helps cool down
          your body during physical activity. As your body heats up, sweat
          evaporates from your skin, reducing your core temperature and helping
          you perform better.
        </p>
      </li>
      <li>
        <p>
          <strong>Detoxification</strong>: Sweating is a natural way for your
          body to eliminate toxins. While it’s not a replacement for your liver
          and kidneys, sweating can help flush out certain waste products and
          keep your skin clear.
        </p>
      </li>
      <li>
        <p>
          <strong>Boosts Metabolism</strong>: Engaging in activities that make
          you sweat often means you’re working hard. This increased effort can
          boost your metabolism, aiding in weight management and improving
          cardiovascular health.
        </p>
      </li>
      <li>
        <p>
          <strong>Improves Skin Health</strong>: Sweating helps unclog pores and
          remove impurities from your skin. This can lead to a clearer
          complexion and healthier skin overall.
        </p>
      </li>
      <li>
        <p>
          <strong>Promotes Mental Well-being</strong>: Physical activity that
          induces sweating also triggers the release of endorphins, the body’s
          natural mood lifters. This can lead to improved mental health and a
          reduction in stress levels.
        </p>
      </li>
    </ol>
    <h3>Embrace the Sweat</h3>
    <p>
      Sweating is a sign that your body is working efficiently and adapting to
      the physical demands placed on it. Rather than viewing sweat as something
      to be avoided, embrace it as a positive and natural part of your fitness
      routine.
    </p>
    <p><strong>Tips for Managing Sweat:</strong></p>
    <ul>
      <li>
        <p>
          <strong>Stay Hydrated</strong>: Drink plenty of water before, during,
          and after exercise to replace fluids lost through sweating.
        </p>
      </li>
      <li>
        <p>
          <strong>Wear Breathable Fabrics</strong>: Opt for moisture-wicking
          clothing that helps manage sweat and keeps you comfortable.
        </p>
      </li>
      <li>
        <p>
          <strong>Shower Regularly</strong>: After sweating, rinse off to keep
          your skin clean and prevent any potential irritation.
        </p>
      </li>
    </ul>
        </article>
      </div>
  )
}