const data = {
  authors: [
      {
          name: "Christina",
          bio: "Been gaming since I could say 'uno'!",
          id: 1
      },
      {
          name: "Shep",
          bio: "First console: Sears Tele-Pong. Beat that, noobs.",
          id: 2
      },
      {
          name: "Dakota",
          bio: "My life had no meaning until Game Cube.",
          id: 3
      }
  ],
  articles: [
      {
          id: 1,
          authorId: 2,
          title: "Top 10 2-player Games to Play in Quarantine",
          content: "Non voluptas delectus earum voluptatem tempore culpa suscipit. Numquam nesciunt sint nemo velit sint tenetur voluptatem ipsum. Eligendi repellendus non exercitationem error unde incidunt corrupti et.",
          categoryId: 2
      },
      {
          id: 2,
          authorId: 1,
          title: "Magic: The Gathering -- Peak Nerd?",
          content: "Ea ut ut dolorem numquam quo quia asperiores. Voluptas sunt ducimus consequuntur fugit. Voluptas quaerat est est velit non cupiditate aut molestiae. Aut ad ut enim assumenda expedita sit maiores. Aut enim quod sunt aut non et cum sit.",
          categoryId: 1
      },
      {
          id: 3,
          authorId: 2,
          title: "Can One Own Too Many Games?",
          content: "Ea ut ut dolorem numquam quo quia asperiores. Voluptas sunt ducimus consequuntur fugit. Voluptas quaerat est est velit non cupiditate aut molestiae. Aut ad ut enim assumenda expedita sit maiores. Aut enim quod sunt aut non et cum sit.",
          categoryId: 1
      },
      {
          id: 4,
          authorId: 3,
          title: "Coming Soon: Blade Runner the Board Game",
          content: "Ea ut ut dolorem numquam quo quia asperiores. Voluptas sunt ducimus consequuntur fugit. Voluptas quaerat est est velit non cupiditate aut molestiae. Aut ad ut enim assumenda expedita sit maiores. Aut enim quod sunt aut non et cum sit.",
          categoryId: 3
      }
  ],
  categories: [
      {
          id: 1,
          name: "The Tabletop Lifestyle"
      },
      {
          id: 2,
          name: "Top 10 Lists"
      },
      {
          id: 3,
          name: "Industry News"
      }
  ]
}

export const getAuthors = () => {
  const copyOfAuthors = [...data.authors] //... is the spread operator. We are copying the contents of the data.authors array into a brand new array
  return copyOfAuthors
}

export const getArticles = () => {
  const copyOfArticles = [...data.articles]
  return copyOfArticles
}

export const getCategories = () => {
  const copyOfCategories = [...data.categories]
  return copyOfCategories
}
