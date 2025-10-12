// Simple mock auth hook
const useAuth = () => {
  const isAuthenticated = localStorage.getItem('auth') === 'true';

  return { isAuthenticated };
};

export default useAuth;
