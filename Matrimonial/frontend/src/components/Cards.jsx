import React from 'react'
import CardCarousel from './CardCarousel'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Cards = () => {
  return (
    <section class="text-gray-600 body-font bg-blue-200">
        <div class="container px-5 py-20 mx-auto">
            <div class="flex flex-wrap w-full mb-20">
            <div>
                <h1 class="text-5xl font-medium title-font mb-2 text-gray-900">Here are the finds!</h1>
                <div class="h-1 w-20 bg-green-500 rounded"></div>
            </div>
            </div>
            <div class="flex flex-wrap -m-4">
              <CardCarousel />
            </div>
        </div>
    </section>
  )
}

export default Cards