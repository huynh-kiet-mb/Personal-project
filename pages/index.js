import { useState } from "react";
import Slider from "../components/slider/index";

const config = [
  {
      title: 'Beach 1',
      image: 'https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg',
  },
  {
      title: 'Beach 2',
      image: 'https://images.pexels.com/photos/457881/pexels-photo-457881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
      title: 'Beach 3',
      image: 'https://images.pexels.com/photos/635279/pexels-photo-635279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
      title: 'Beach 4',
      image: 'https://images.pexels.com/photos/50594/sea-bay-waterfront-beach-50594.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
]

export default function Home() {
  const [count, setCount] = useState(0);
  return (
    <Slider config={config}/>
  )
}
