const router = require('express').Router();
const Book = require('../../models/Book');

// TODO finish the PUT route to UPDATE a book in the database with a matching book_id
// PUT '/api/books/:book_id' 
router.put('/:book_id', async (req, res) => {
  try{
    // be specific about which datapoints to grab
    const { title, author, isbn, pages, is_paperback } = req.body;
    // put validation... add values
    const result = await Book.update(
    { title, author, isbn, pages, is_paperback }, 
    {
      where: {
        // :book_id is basically which to update
        book_id: req.params.book_id
      }
    });
    res.json(result);
  }
  catch(err){
    res.status(404).json(err);
  }
});

// TODO finish the DELETE route to DELETE a book in the database with a matching book_id
// DELETE '/api/books/:book_id' 
router.delete('/:book_id', async (req, res) => {
  try{
    // throw new Error("Forcing you to drop the taco");
    const result = await Book.destroy({
      where: {
        // :book_id is basically which to delete
        book_id: req.params.book_id
      }
    });

    res.json(result);

  }
  catch(err){
    console.log(err);
    res.status(404).json(err);
  }
});

router.post('/seed', (req, res) => {
  Book.bulkCreate([
    {
      title: 'Make It Stick: The Science of Successful Learning',
      author: 'Peter Brown',
      isbn: '9780674729018',
      pages: 336,
      edition: 1,
      is_paperback: false,
    },
    {
      title:
        'Essential Scrum: A Practical Guide to the Most Popular Agile Process',
      author: 'Kenneth Rubin',
      isbn: '9780137043293',
      pages: 500,
      edition: 1,
      is_paperback: true,
    },
    {
      title:
        "White Fragility: Why It's So Hard for White People to Talk About Racism",
      author: 'Robin DiAngelo',
      isbn: '9780807047415',
      pages: 192,
      edition: 2,
      is_paperback: true,
    },
    {
      title: 'The Pragmatic Programmer: Your Journey To Mastery',
      author: 'David Thomas',
      isbn: '9780135957059',
      pages: 352,
      edition: 2,
      is_paperback: false,
    },
    {
      title: 'The Art of Computer Programming, Vol. 1: Fundamental Algorithms',
      author: 'Donald Knuth',
      isbn: '9780201896831',
      pages: 672,
      edition: 3,
      is_paperback: false,
    },
    {
      title: 'Algorithms of Oppression: How Search Engines Reinforce Racism',
      author: 'Safiya Umoja Noble',
      isbn: '9781479837243',
      pages: 256,
      edition: 1,
      is_paperback: true,
    },
  ]).then(() => {
    res.send('Seeding Success!');
  });
});

module.exports = router;
