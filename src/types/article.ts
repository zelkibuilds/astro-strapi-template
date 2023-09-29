export type Article = {
  id: number;
  attributes: {
    title: string;
    description: string;
    cover: {
      data: {
        id: number;
        attributes: {
          url: string;
        };
      };
    };
  };
};
