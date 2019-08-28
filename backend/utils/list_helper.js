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

module.exports = {
    dummy,
    totalLikes,
    favoriteBlog
}