

const RenderJokes = () => {
    const jokes = [
        {
          id: 1,
          setup: "What's the best thing about a Boolean?",
          punchline: "Even if you're wrong, you're only off by a bit"
        },
        {
          id: 2,
          setup: "Why do programmers wear glasses?",
          punchline: "Because they need to C#"
        }
      ];
  return (
    <div className='grid grid-cols-2 gap-4 '>
			{ jokes.map(joke => (
				<div key={joke.id} className="h-64 p-8 bg-white w-96">
					<h3 className='mb-8 text-2xl font-bold'>{joke.setup}</h3>
					<p>{joke.punchline}</p>
				</div>
			)) }
		</div>
  )
}

export default RenderJokes