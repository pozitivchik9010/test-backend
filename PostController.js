import Post from "./Post.js";
import PostService from "./PostService.js";

class PostController {
  async create(req, res) {
    try {
      const post = await PostService.create(req.body, req.files.picture);
      res.status(200).json(post);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }

  async getAll(req, res) {
    try {
      const posts = await PostService.getAll();
      return res.status(200).json(posts);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }
  async getOne(req, res) {
    try {
       
      const post = await PostService.getOne(req.params.id);
      if (!post) {
        res.status(404).json({ message: "post за таким id не знайдено!" });
      }
      return res.status(200).json(post);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }
  async update(req, res) {
    try {
      const updatedPost = await PostService.updatePost(req.body)
      return res.status(200).json(updatedPost);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }
  async delete(req, res) {
    try {
      const post = await PostService.deletePost(req.params.id)
      return res.status(200).json(post);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }
}

export default new PostController();
