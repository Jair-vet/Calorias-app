type CalorieDisplayProps = {
    calories: number
    text: string
}

export default function CalorieDisplay({calories, text} : CalorieDisplayProps) {
  return (
    <p className="text-white font-bold bg-gradient-to-b shadow-xl from-cyan-500 to-slate-800 w-[200px] h-[200px] rounded-full text-center flex flex-col justify-center items-center">
        <span className="font-black  text-6xl text-orange">{calories}</span>
        {text}
    </p>
  )
}
