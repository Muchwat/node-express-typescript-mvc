import PageParams from "../interfaces/page.interface";

const Paginate = async (model: any, perPage: number, page: PageParams) => {
    let currentPage: number = Math.max(0, Math.floor(page.currentPage)) || 1;
    const limit: number = perPage;
    page.query = page.query || { where: {} };
    const offset: number = (currentPage - 1) * limit;
    const order: Array<Array<string>> = [page.order || ['id', 'ASC']];
    let pagination = await model.findAndCountAll({ ...page.query, offset, limit, order });
    const totalPages: number = Math.ceil(pagination.count / limit);
    return { currentPage, perPage, totalPages, ...pagination };
};

export default Paginate;