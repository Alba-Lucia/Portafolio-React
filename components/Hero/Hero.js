import React from 'react'
import { Wave } from './Wave'

export function Hero() {
  return (
   <div className="hero__content--blue mb-4">
      <div className="content__dark py-4">
        <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
          <div className="order-md-1 ">
            <div className="hero my-4">
              <div className="hero__text pe-4 text-end w-100">
                <p>Hello I{`'`}m</p>
                <h1>Alba Lucía González</h1>
              </div>
            </div>
          </div>
          <img src='AlbaPortafolio.png' alt='Photo alba lucia gonzalez' className="hero__imagen"/>
        </div>
      </div>
      
      <Wave/>
      
   </div>
  )
}
