import axios from "axios";

export const ItemsPerPage = 12;

export async function getApi(value, pageNumber) {
    try {
        const response = await axios(`https://pixabay.com/api/?q=${value}&page=${pageNumber}&key=33354076-0a876f5b723d518ba8fae8563&image_type=photo&orientation=horizontal&per_page=${ItemsPerPage}`);
        return response.data.hits;
    } catch (error) {
        console.log(error);
    };
};