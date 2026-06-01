import React, { useEffect, useState } from 'react'
import Loading from '../component/Loading'
import EmployeeDashboard from '../component/EmployeeDashboard'
import AdminDashboard from '../component/AdminDashboard'

import { dummyAdminDashboardData } from '../assets/dummyAdminDashboardData'

 {/* this is the function = page user visit
  const Dashboard = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setData(dummyEmployeeDashboardData)

    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])*/ }
const Dashboard = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setData(dummyAdminDashboardData)

    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  if (loading) return <Loading />

  if (!data) {
    return (
      <p className='text-center text-slate-500 py-12'>
        Failed to load dashboard
      </p>
    )
  }

  if (data.role === "ADMIN") {
    return <AdminDashboard data={data}/>
  }

  return <EmployeeDashboard data={data} />
}

export default Dashboard