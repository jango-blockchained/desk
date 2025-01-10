import { createResource } from "frappe-ui";

// Title
export const newArticle = createResource({
  url: "frappe.client.insert",
  makeParams({ title, content, category }) {
    return {
      doc: {
        doctype: "HD Article",
        title,
        content,
        category,
      },
    };
  },
  validate({ doc }) {
    if (!doc.title) throw "Title is required";
    if (!doc.content) throw "Content is required";
  },
});

export const updateRes = createResource({
  url: "frappe.client.set_value",
});

export const deleteRes = createResource({
  url: "frappe.client.delete",
});

// Category

export const newCategory = createResource({
  url: "helpdesk.api.knowledge_base.create_category",
  makeParams({ title }) {
    return {
      title,
    };
  },
  validate(title: string) {
    if (!title) throw "Title is required";
  },
});

export const updateCategoryTitle = createResource({
  url: "frappe.client.set_value",
  validate({ name, value }) {
    if (!value) throw "Title is required";
  },
});

export const deleteCategory = createResource({
  url: "helpdesk.api.knowledge_base.delete_category",
  makeParams({ name }) {
    return {
      name,
    };
  },
  validate({ name }) {
    if (!name) throw "Category is required";
  },
});

export const moveToCategory = createResource({
  url: "helpdesk.api.knowledge_base.move_to_category",
  makeParams({ category,articles }) {
    return {
      category,
      articles
    };
  },
  validate({ category,articles }) {
    if (!category) throw "Category is required";
    if (!articles) throw "Articles are required";
  }

})