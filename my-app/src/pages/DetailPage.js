import data from "../data";

const DetailPage = {
    render(id) {
        const result = data.find((post) => post.id === id);
        return `
            <h2>${result.title}</h2>
            <img src="${result.img}" />
            <p>${result.desc}</p>
            
        `;
    },
};

export default DetailPage;