function One() {
  return <p>one</p>
}

function Two() {
  return <p>two</p>
}

function Three() {
  return <p>three</p>
}

export default function App() {
  return (
    <div>
      {/* key가 없다고 뜹니다! */}
      {/* {[<One/>,<Two/>, <Three/>]} */}

      {[
        <One key='100' />,
        <Two key='200' />,
        <Three key='300' />,
        [
          <One key='400' />,
          <Two key='500' />,
          [
            <One key='600' />,
            <Two key='700' />,
          ]
        ]
      ]}
    </div>
  )
}