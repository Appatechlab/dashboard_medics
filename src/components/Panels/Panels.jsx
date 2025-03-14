import React from 'react'
import PanelCard from './PanelCard'
import { BarGraph, SmoothAreaChart } from './Chart'
import CalendarComponent from './Calendar'
import MedsCard from './MedsCard'
import AppointmentList from './AppointmentList'
import Heart from "../../assets/heart.svg"
import Brain from "../../assets/brain.svg"
import BrainDark from "../../assets/brain_dark.svg"
import VaccinatedPersonCard from './VaccinatedPersonCard'

const Panels = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5'>
      <div className='col-span-3'>
          <p className='text-sm text-gray-500'>Welcome Back,</p>
          <h2 className='font-bold text-2xl text-gray-800'>Appati Benedict</h2>

          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-5'>
              <PanelCard className={"patient-panel"}/>
              <PanelCard className={"staff-panel"}/>
              <PanelCard className={"rooms-panel"}/>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 mt-6 gap-6'>
            <div className='rounded-2xl bg-white py-4 pr-2 sm:pr-8 shadow-md'>
              <h2 className='font-bold text-xl pl-8'>Patient Prescription</h2>
              <div className='mt-5'>
                <BarGraph />
              </div>
            </div>

            <div className='rounded-2xl bg-white py-4 shadow-md px-6'>
              <h2 className='font-bold text-xl'>Medicine Runs Out</h2>
              <div className='grid max-[450px]:grid-cols-1 max-[450px]:h-[22rem] max-[450px]:overflow-y-scroll grid-cols-2 mt-5 gap-4'>
                  <MedsCard listNumber={"1."} heading={"Amoxacilline"} textColor={"text-white"} bgColor={"bg-[#339cff]"} date={'12th August 2025'}/>
                  <MedsCard listNumber={"2."} heading={"Estrogen"} textColor={"text-gray-800"} bgColor={"bg-gray-100"} date={'10th June 2025'}/>
                  <MedsCard listNumber={"3."} heading={"Baclofen"} textColor={"text-gray-800"} bgColor={"bg-gray-100"} date={'18th May 2025'}/>
                  <MedsCard listNumber={"4."} heading={"Finasteride"} textColor={"text-gray-800"} bgColor={"bg-gray-100"} date={'10th October 2025'}/>
                  <MedsCard listNumber={"5."} heading={"Glycerol"} textColor={"text-gray-800"} bgColor={"bg-gray-100"} date={'12th August 2025'}/>
                  <MedsCard listNumber={"6."} heading={"Metformin"} textColor={"text-gray-800"} bgColor={"bg-gray-100"} date={'12th August 2025'}/>
                  <MedsCard listNumber={"7."} heading={"Cefazolin"} textColor={"text-gray-800"} bgColor={"bg-gray-100"} date={'12th August 2025'}/>
                  <MedsCard listNumber={"8."} heading={"Diazepam"} textColor={"text-gray-800"} bgColor={"bg-gray-100"} date={'12th August 2025'}/>
              </div>
            </div>
          </div>

          <div className='mt-6 bg-white rounded-2xl py-4 pl-2 pr-2 sm:pr-8 shadow-md'>
              <div className='flex sm:justify-between sm:items-center justify-start flex-col gap-2'>
                <h2 className='font-bold text-xl pl-3 sm:pl-8'>Patient Statistics</h2>
                <select name="" id="" className='text-sm ml-2 sm:ml-0 text-gray-500 border-2 border-gray-200 rounded-lg py-2 px-2'>
                  <option value="">Today</option>
                  <option value="">This Week</option>
                  <option value="">This Month</option>
                  <option value="">This Year</option>
                </select>
              </div>
              <div className='mt-4'>
                <SmoothAreaChart />
              </div>
          </div>
      </div>

      <div className='col-span-3 lg:col-span-1'>
        <h2 className='font-bold text-lg pt-6'>Consultation Date</h2>
        <div className='mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-5'>

          <CalendarComponent />

          <div className='space-y-3'>
            <AppointmentList title={"Lung Poly"} textColor={"text-white"} time={"10:00 - 12:00"} doctor={"Dr. Walter Appati"} icon={Heart} bgColor={"bg-[#339cff]"}/>
            <AppointmentList title={"Brain Poly"} time={"8:00 - 9:00"} doctor={"Dr. Benedict Appati"} icon={BrainDark} bgColor={"bg-gray-200"}/>
            <AppointmentList title={"Brain Poly"} time={"8:00 - 9:00"} doctor={"Dr. Benedict Appati"} icon={BrainDark} bgColor={"bg-gray-200"}/>
          </div>

          <div className='pl-6 pr-4 py-5 bg-white rounded-2xl shadow-sm'>
            <h2 className='font-bold text-xl'>Patient Vaccinated</h2>
            <div className='space-y-4 mt-6'>
              <VaccinatedPersonCard />
              <VaccinatedPersonCard />
              <VaccinatedPersonCard />
              <VaccinatedPersonCard />
              <VaccinatedPersonCard />
              <VaccinatedPersonCard />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Panels