// import { ChangeEvent, useState } from 'react';
// import { Step } from '../type';
// import ProgressBar from './progress-bar';
// import Description from './description';
// import Field from './field';

// interface Props {
//   step: Step;
// }

// const Step = ({
//   step: {
//     number,
//     title,
//     description,
//     isActive,
//     validationRule,
//     fieldName,
//     fieldType,
//   },
// }: Props) => {
//   const { stepForm, setStepForm } = useStepForm();

//   const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
//     setStepForm((prev) => {
//       return { ...prev, [e.target.name]: e.target.value };
//     });
//   };

//   return (
//     <div className='pt-4'>
//         <ProgressBar title='1단계' current={1} total={4} />
//       <div className='px-4 pt-10'>
//         <Description description='1단계를 입력해주세요' current={1} total={4} />
//         <Field
//           label='성'
//           placeholder='성을 입력해주세요'
//           inputName='firstName'
//           inputType='text'
//           onChange={() => {}}
//         />
//       </div>

//       {data.keys().map((key, idx) => (
//         <Field
//           key={idx}
//           name={fieldName}
//           label={key}
//           placeholder={description}
//           inputType={fieldType}
//           onChange={handleInputChange}
//         />
//       ))}
//     </div>
//   );
// };
