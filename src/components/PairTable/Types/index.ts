interface User {
    id: number;
    firstName: string;
    lastName: string;
    maidenName: string;
    age: number;
    // Add other fields as needed
  }
  
  interface PairTableProps {
    users: User[];
  }