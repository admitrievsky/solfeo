const quotes = [
  "I want to seize fate by the throat. ",
  "There ought to be but one large art warehouse in the world, to which the artist could carry his art-works, and from which he could carry away whatever he needed. As it is, one must be half a tradesman.",
  "Music is like a dream. One that I cannot hear.",
  "''Muß es sein?  Es muß sein.''  Must it be? It must be.",
  "Music is a higher revelation than all wisdom and philosophy.",
  "Music is indeed the mediator between the spiritual and sensual life.",
  "Art! Who comprehends her? With whom can one consult concerning this great goddess?",
  " Do not merely practice your art, but force your way into its secrets; it deserves that, for only art and science can exalt man to divinity.",
  "The world is a king, and like a king, desires flattery in return for favor; but true art is selfish and perverse — it will not submit to the mold of flattery.",
  "The day-to-day exhausted me!",
  "''Plaudite, amici, comedia finita est.'' (Applaud, my friends, the comedy is over.)",
  "''Ich werde im Himmel hören!'' (I will hear in heaven!)",
]

export function getQuote(): string {
  return quotes[Math.floor(Math.random() * quotes.length)];
}
