class PostServices {
  private baseUrl: string;
  private postStatus: boolean;
  public static cateogryId: number;
  public static userId: number;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
    this.postStatus = false;
  }

  async AddPost(
    endpoint: string,
    postTitle: string,
    postContent: string,
    postSubTitle: string,
    image: File
  ): Promise<boolean | null> {
    try {
      const response = await fetch(`${this.baseUrl}/${endpoint}`, {
        mode: "cors",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ postTitle, postContent, postSubTitle, image }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      this.postStatus = result;
      return true;
    } catch (error) {
      console.log("Error Occured : " + error);
      return false;
    }
  }
}

export default PostServices;
