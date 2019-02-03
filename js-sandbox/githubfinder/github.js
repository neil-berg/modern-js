class GitHub {
  constructor() {
    this.client_id = '7dcec4e1a36c92817d40';
    this.client_secret = '62c8a2c017cf508a8719fc60e59cd2148b3ae9b1';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    
    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
    
    const profile = await profileResponse.json()    
    const repos = await repoResponse.json()    
    return {
      profile,
      repos
    }

  }
}