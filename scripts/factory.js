const createJobHTML = (object) => {
    return `
    <section class="card">
        <h1>${object.role}</h1>
        <h2>${object.organization}</h2>
        <aside>${object.city}</aside>
    </section>`
}