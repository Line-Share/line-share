const { db, models: { User, Post, Draft, Comment }} = require('../server/db');

async function seed() {
  await db.sync({force: true});
  console.log("db synced");

  const users = await Promise.all([
    User.create({ username: 'syedcito', password: 'skunt'}),
    User.create({ username: 'namro', password: 'wag1'},
    User.create({ username: 'pingO', password: "nrgfatass"}))
  ])

  const posts = await Promise.all([
    Post.create({
      imageUrl: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/p160x160/258727237_315468880140108_5915905662162555225_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=aee45a&_nc_ohc=oGfNmXvLSOgAX-poFdQ&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=5fa2c43d3122c8a84edf1b50420a7c5c&oe=61BC6919',
    caption: 'Fuck the Knicks',
    userId: 1}),
  Post.create({
    imageUrl: 'https://d.newsweek.com/en/full/1191074/pain-headache.jpg?w=1600&h=1200&q=88&f=384dfcc3accf6a1a13d0c1273599933f',
    caption: 'Pain',
    userId: 2}),
  Post.create({
    imageUrl: 'https://cdn.discordapp.com/attachments/669050156737363968/911360641149849630/latest.png',
    caption: "Sanic",
    userId: 3
  })
  ])

  const comments = await Promise.all([
    Comment.create({
      content: "I wish Mike Woodson would come back",
      userId: 2,
      postId: 1}),
    Comment.create({
      content: "Jeff Smells",
      userId: 1,
      postId: 2}),
    Comment.create({
      content: "Gotta Go Fast",
      userId: 3,
      postId: 2})
  ])
}

async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

if (module === require.main) {
  runSeed()
}

module.exports = seed

