import { useForm } from 'react-hook-form';
import React from 'react';
import { UserProfile, useUserStore } from '@/app/Settings/useUserProfileStore';

export const SettingForm = () => {
  const { profile, updateProfile } = useUserStore();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UserProfile>({
    defaultValues: profile,
  });

  const onSubmit = (data: UserProfile) => {
    updateProfile(data);
    console.log('Saved:', data);
  };

  const formFields = [
    {
      label: 'Your Name',
      name: 'name',
      placeholder: 'Charlene Reed',
      rules: { required: 'Name is required' },
    },
    {
      label: 'User Name',
      name: 'username',
      placeholder: 'Charlene Reed',
      rules: { required: 'Username is required' },
    },
    {
      label: 'Email',
      name: 'email',
      type: 'email',
      placeholder: 'charlenereed@gmail.com',
      rules: {
        required: 'Email is required',
        pattern: {
          value: /^\S+@\S+$/i,
          message: 'Invalid email address',
        },
      },
    },
    {
      label: 'Password',
      name: 'password',
      type: 'password',
      placeholder: '********',
      rules: {
        required: 'Password is required',
        minLength: { value: 6, message: 'Min 6 characters' },
      },
    },
    {
      label: 'Date of Birth',
      name: 'dob',
      type: 'date',
      rules: { required: 'Date of birth is required' },
    },
    {
      label: 'Present Address',
      name: 'presentAddress',
      placeholder: 'San Jose, California, USA',
      rules: { required: 'Present address is required' },
    },
    {
      label: 'Permanent Address',
      name: 'permanentAddress',
      placeholder: 'San Jose, California, USA',
      rules: { required: 'Permanent address is required' },
    },
    {
      label: 'City',
      name: 'city',
      placeholder: 'San Jose',
      rules: { required: 'City is required' },
    },
    {
      label: 'Postal Code',
      name: 'postalCode',
      placeholder: '45962',
      rules: { required: 'Postal code is required' },
    },
    {
      label: 'Country',
      name: 'country',
      placeholder: 'USA',
      rules: { required: 'Country is required' },
    },
  ];

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full grid grid-cols-1 md:grid-cols-2 gap-6"
    >            
      {formFields.map(({ label, name, type, placeholder = '', rules }) => (
        <div key={name} className="flex flex-col">
          <label className="text-sm text-[#232323] mb-1">{label}</label>
          <input
            type={type}
            {...register(name as keyof UserProfile, rules)}
            placeholder={placeholder}
            className={`w-full px-4 py-2 rounded-md border ${
              errors[name as keyof UserProfile]
                ? 'border-red-500'
                : 'border-gray-200'
            } bg-[#F5F7FA] text-[#718EBF] focus:outline-none focus:ring-1 focus:ring-[#343C6A]`}
          />
          {errors[name as keyof UserProfile] && (
            <span className="text-red-500 text-xs mt-1">
              {errors[name as keyof UserProfile]?.message as string}
            </span>
          )}
        </div>
      ))}

      <div className="col-span-2 flex justify-end mt-4">
        <button
          type="submit"
          className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800"
        >
          Save
        </button>
      </div>
    </form>
  );
};
