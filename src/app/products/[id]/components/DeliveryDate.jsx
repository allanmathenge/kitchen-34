import React from "react"

export default function DeliveryDate() {
  const today = new Date()
  const tomorrow = new Date()
  tomorrow.setDate(today.getDate() + 1)

  const options = {year:'numeric', month:'long', day: 'numeric'}
  const nextDay = tomorrow.toLocaleDateString(undefined, options)
  
  return nextDay
}
