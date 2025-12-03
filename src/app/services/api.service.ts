export class ApiService {
  private apiUrl: string;

  constructor() {
    this.apiUrl = 'https://api.example.com';
  }

  getData(endpoint: string): Promise<any> {
    return fetch(`${this.apiUrl}/${endpoint}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      });
  }

  postData(endpoint: string, data: any): Promise<any> {
    return fetch(`${this.apiUrl}/${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    });
  }
}