// User tipi
export interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    role: 'admin' | 'guest' | 'manager';
    created_at: string;
  }
  
  // Project tipi
  export interface Project {
    id: number;
    name: string;
    description: string;
    owner_id: number;
    created_at: string;
  }
  
  // Task tipi
  export interface Task {
    id: number;
    title: string;
    status: 'todo' | 'in_progress' | 'done';
    project_id: number;
    assigned_user_id: number;
    start_date: string;
    end_date: string;
    priority: 'low' | 'medium' | 'high';
  }
  
  // Comment tipi
  export interface Comment {
    id: number;
    task_id: number;
    user_id: number;
    content: string;
    created_at: string;
  }

  // JWT Tipi
  export interface JWT {  
    token: string;
    user: User;
  }
  
  // Mock Users
  export const users: User[] = [
    { id: 1, name: 'Ali Yılmaz', email: 'ali@example.com', password: '12345678', role: 'admin', created_at: '2024-06-01T10:00:00Z' },
    { id: 2, name: 'Ayşe Demir', email: 'ayse@example.com', password: '12345678', role: 'guest', created_at: '2024-06-02T11:30:00Z' },
    { id: 3, name: 'Mehmet Kaya', email: 'mehmet@example.com', password: '12345678', role: 'manager', created_at: '2024-06-03T09:45:00Z' },
  ];
  
  // Mock Projects
  export const projects: Project[] = [
    { id: 1, name: 'Projeler Platformu', description: 'Proje yönetim platformu.', owner_id: 1, created_at: '2024-06-05T12:00:00Z' },
    { id: 2, name: 'Blog Sitesi', description: 'Kişisel blog uygulaması.', owner_id: 2, created_at: '2024-06-06T08:20:00Z' },
  ];
  
  // Mock Tasks
  export const tasks: Task[] = [
    { id: 1, title: 'Frontend Tasarım', status: 'todo', project_id: 1, assigned_user_id: 2, start_date: '2024-06-07', end_date: '2024-06-10', priority: 'high' },
    { id: 2, title: 'API Entegrasyonu', status: 'in_progress', project_id: 1, assigned_user_id: 3, start_date: '2024-06-08', end_date: '2024-06-12', priority: 'medium' },
    { id: 3, title: 'Blog Yazısı Ekle', status: 'done', project_id: 2, assigned_user_id: 2, start_date: '2024-06-09', end_date: '2024-06-09', priority: 'low' },
  ];
  
  // Mock Comments
  export const comments: Comment[] = [
    { id: 1, task_id: 1, user_id: 3, content: 'Tasarım için Figma kullanılabilir.', created_at: '2024-06-07T13:00:00Z' },
    { id: 2, task_id: 2, user_id: 1, content: 'API endpointleri hazır.', created_at: '2024-06-08T14:30:00Z' },
    { id: 3, task_id: 3, user_id: 2, content: 'Yazı eklendi ve yayınlandı.', created_at: '2024-06-09T16:10:00Z' },
  ];

  // Mock JWT
  export const jwt: JWT = {
    token: '1234567890',
    user: users[0],
  }
  