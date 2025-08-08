import type { FormFieldConfig, Plan } from './interface';

// inks for navbar
export const links = [
  { id: 1, name: 'Home', hash: 'Home' },
  { id: 2, name: 'About', hash: 'About' },
  { id: 3, name: 'Service', hash: 'Service' },
  { id: 4, name: 'Contact', hash: 'Contact' },
];
//for class
export const classesData = [
  {
    id: 1,
    title: 'Cardio Blast',
    category: 'Cardio',
    description: 'High-intensity workout to boost endurance and burn calories.',
    image: '/assets/whyUsOne.webp',
  },
  {
    id: 2,
    title: 'Strength Training',
    category: 'Strength',
    description: 'Build muscle and increase strength with guided sessions.',
    image: '/assets/whyUsOne.webp',
  },
  {
    id: 3,
    title: 'Yoga Flow',
    category: 'Yoga',
    description: 'Improve flexibility and calm your mind with yoga poses.',
    image: '/assets/whyUsOne.webp',
  },
  {
    id: 4,
    title: 'Dance Fitness',
    category: 'Dance',
    description: 'Fun and energetic dance routines to stay fit and happy.',
    image: '/assets/whyUsOne.webp',
  },
  {
    id: 5,
    title: 'Power Cardio',
    category: 'Cardio',
    description: 'A mix of cardio drills and strength intervals for max burn.',
    image: '/assets/whyUsOne.webp',
  },
  {
    id: 6,
    title: 'Functional Strength',
    category: 'Strength',
    description: 'Train movements that enhance everyday performance.',
    image: '/assets/whyUsOne.webp',
  },
];

export const categories = ['All', 'Cardio', 'Strength', 'Yoga', 'Dance'];

//for plans
export const plans: Plan[] = [
  {
    name: 'Beginner Plan',
    price: '$10',
    period: 'Month',
    description:
      'Perfect for those starting their fitness journey with essential features to get going.',
    features: [
      'Access to all cardio equipment',
      '1 group training session per week',
      'Locker room access',
      'Free water bottle',
      'Email support',
    ],
    isPopular: false,
  },
  {
    name: 'Premium Plan',
    price: '$15',
    period: 'Month',
    description:
      'Our most popular plan offering a balance of flexibility, equipment access, and classes.',
    features: [
      'Full gym access',
      '3 group training sessions per week',
      'Locker + sauna access',
      'Free gym merchandise',
      'Priority email & chat support',
    ],
    isPopular: true,
  },
  {
    name: 'Elite Plan',
    price: '$20',
    period: 'Month',
    description:
      'For those who want it all — unlimited access, personal coaching, and premium perks.',
    features: [
      'Unlimited gym access',
      'Unlimited group classes',
      'Personal trainer sessions',
      'Nutrition consultation',
      '24/7 VIP support',
    ],
    isPopular: false,
  },
];

//for login

export const loginFormData: FormFieldConfig[] = [
  {
    name: 'email',
    type: 'email',
    placeholder: 'Enter your email',
    label: 'Email Address',
  },
  {
    name: 'password',
    type: 'password',
    placeholder: 'Enter your password',
    label: 'Password',
  },
];

export const signupFormData: FormFieldConfig[] = [
  {
    name: 'firstName',
    type: 'text',
    placeholder: 'Enter your first name',
    label: 'First Name',
  },
  {
    name: 'lastName',
    type: 'text',
    placeholder: 'Enter your last name',
    label: 'Last Name',
  },
  {
    name: 'email',
    type: 'email',
    placeholder: 'Enter your email',
    label: 'Email Address',
  },
  {
    name: 'phone',
    type: 'tel',
    placeholder: 'Enter your phone number',
    label: 'Phone Number',
  },
  {
    name: 'password',
    type: 'password',
    placeholder: 'Create a password',
    label: 'Password',
  },
  {
    name: 'confirmPassword',
    type: 'password',
    placeholder: 'Confirm your password',
    label: 'Confirm Password',
  },
];
