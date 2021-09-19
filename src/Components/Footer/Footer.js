import React from 'react'
import logo from '../Assets/iguanalogo.png'
import "./footer.css"
export default function Footer() {
    return (
        <div>
     <nav id="footer" class="bg-gray-400">


<div class="container sss mx-auto pt-8 pb-4">

    <div class="flex flex-wrap overflow-hidden sm:-mx-1 md:-mx-px lg:-mx-2 xl:-mx-2">

        <div class="w-full overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-px md:px-px md:w-1/2 lg:my-2 lg:px-2 lg:w-1/4 xl:my-2 xl:px-2 xl:w-1/4 pb-6">

            <img  class="logo" src={logo} alt="Logo"/>
        </div>

        <div class="w-full overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-px md:px-px md:w-1/2 lg:my-2 lg:px-2 lg:w-1/4 xl:my-2 xl:px-2 xl:w-1/4 pb-6">
        


            <h4 class="text-white">12727 Shoppes Lane <br/> Fairfax VA, 20120</h4>
            <ul class="nav navbar-nav">
                <li id="navi-2" class="leading-7 text-sm">
                    <a class="text-white underline text-small" href="/page-1">
                    703-502-8108</a>
                </li>
            </ul>


        </div>

        <div class="w-full text-white overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-px md:px-px md:w-1/2 lg:my-2 lg:px-2 lg:w-1/4 xl:my-2 xl:px-2 xl:w-1/4 pb-6">
        
            <h4 class="text-white">Hours</h4>
            <ul class="">
            <li id="navi-2" class="leading-7 text-white text-sm">
                <a class="hours text-white" href="/page-1">
                Monday-Friday: 11:30am - 2:00am
                Saturday: 12:00pm - 2:00am
               <br/> Sunday: 10:00am - 2:00am </a>
            </li>
            
            </ul>
        </div>

        <div class="w-full overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-px md:px-px md:w-1/2 lg:my-2 lg:px-2 lg:w-1/4 xl:my-2 xl:px-2 xl:w-1/4 pb-6">
      
        </div>

    </div>

<div class="social">
    <i class="fab fa-facebook text-white"></i>
    <i class="fab fa-instagram text-white"></i>
</div>

    <div class="pt-4 md:flex md:items-center md:justify-center " >
        <ul class="">
            <li class="md:mx-2 md:inline leading-7 text-sm" id="footer-navi-2"><a class="text-white underline text-small" href="/disclaimer">2021 © Blue Iguana </a></li>
            </ul>
        </div>


  
    </div>



</nav>
        </div>
    )
}
