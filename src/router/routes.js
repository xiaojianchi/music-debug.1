import Singer from "@/components/singer/Singer";


export default [
    {path: '/',redirect:'/singer'},
    {path: '/singer',component: Singer}

]
