const dummy = (blogs) => {
    return 1
}

const totalLikes = (blogs) => {
    const reducer = (acc, curr) => acc + curr.likes
    return blogs.length === 0
        ? 0
        : blogs.reduce(reducer, 0)
}

const favoriteBlog = (blogs) => {
    const reducer = (acc, curr) => acc.likes > curr.likes ? acc : curr
    const mostLikes = blogs.reduce(reducer)
    delete mostLikes._id
    delete mostLikes.url
    delete mostLikes.__v
    return mostLikes
}

const mostBlogs = (blogs) => {
    const array = blogs
    const namesArray = []
    const numbersArray = []
    let indexMost

    // fill array with unique authors
    const findAuthors = () => {
        array.forEach(element => {
            if (!namesArray.includes(element.author)){
                namesArray.push(element.author)
            }
        });
    }

    // use set to look for number of blogs and find biggest number for author index
    const findBlogs = () => {
        namesArray.forEach(element => {
            const numberOfBlogs = array.filter(el => el.author.includes(element)).length
            numbersArray.push(numberOfBlogs)
        })
        indexMost = numbersArray.indexOf(Math.max(...numbersArray))
    }

    findAuthors()
    findBlogs()

    const result = {
        Author: namesArray[indexMost],
        Blogs: numbersArray[indexMost]
    }

    return result
}

const mostLikes = (blogs) => {
    const array = blogs
    const namesArray = []
    const numbersArray = []
    let indexMost

    // fill array with unique authors
    const findAuthors = () => {
        array.forEach(element => {
            if (!namesArray.includes(element.author)){
                namesArray.push(element.author)
            }
        });
    }

    // use set to look for number of blogs and find biggest number for author index
    const findBlogs = () => {
        namesArray.forEach(element => {
            const allBlogs = array.filter(el => el.author.includes(element))
            const reducer = (acc, curr) => acc + curr.likes
            const total = allBlogs.reduce(reducer, 0)
            numbersArray.push(total)
        })
        indexMost = numbersArray.indexOf(Math.max(...numbersArray))
    }

    findAuthors()
    findBlogs()

    const result = {
        Author: namesArray[indexMost],
        Likes: numbersArray[indexMost]
    }

    return result
}

module.exports = {
    dummy,
    totalLikes,
    favoriteBlog,
    mostBlogs,
    mostLikes
}