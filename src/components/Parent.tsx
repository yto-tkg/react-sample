import React, { memo, useState } from "react";

type FizzProps = {
  isFizz: boolean
}

const Fizz = (props: FizzProps) => {
  const { isFizz } = props
  console.log(`Fizzが再描画されました、isFizz=${isFizz}`)
  return <span>{isFizz ? 'Fizz' : ''}</span>
}

type BuzzProps = {
  isBuzz: boolean
}

const Buzz = memo<BuzzProps>((props) => {
  const { isBuzz } = props
  console.log(`Buzzが再描画されました、isBuzz=${isBuzz}`)
  return (
    <span>
      {isBuzz ? 'Buzz' : ''}
    </span>
  )
})

export const Parent = () => {
  const [count, setCount] = useState(1)
  const isFizz = count % 3 === 0
  const isBuzz = count % 5 === 0

  console.log(`Parentが再描画されました、count=${count}`)
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>+1</button>
      <p>
        <Fizz isFizz={isFizz} />
        <Buzz isBuzz={isBuzz} />
      </p>
    </div >
  )
}
