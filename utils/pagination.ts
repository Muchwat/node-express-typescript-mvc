interface PageParams {
    query?: any;
    order?: Array<string>;
    currentPage: any;
}

const Paginate = async (model: any, perPage: number, page: PageParams) => {
    const currentPage: number = Math.max(0, Math.floor(Number(page.currentPage))) || 1;
    const limit: number = perPage;
    page.query = page.query || { where: {} };
    const offset: number = (currentPage - 1) * limit;
    const order: Array<Array<string>> = [page.order || ['id', 'ASC']];
    const data:any = await model.findAndCountAll({ ...page.query, offset, limit, order });
    const totalPages: number = Math.ceil(data.count / limit);
    return { currentPage, perPage, totalPages, ...data };
};

export  {Paginate, PageParams};