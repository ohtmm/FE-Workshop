import validateEmpty from '../../../../shared/lib/validation-empty';
import validateIdentificationNumber from '../../../../shared/lib/validation-identification-number';
import validatePhoneNumber from '../../../../shared/lib/validation-phone-number';
import { Step } from '../type';

const INITIAL_STEPPER: Step[] = [
  {
    order: 1,
    isActive: true,
    title: '개인정보 입력',
    description: '이름을 입력해주세요',
    fields: [
      {
        label: '성',
        placeholder: '성을 입력하세요',
        name: 'first_name',
        type: 'text',
        validationRule: validateEmpty,
        invalidText: '성을 입력하지 않았습니다',
      },
      {
        label: '이름',
        placeholder: '이름을 입력하세요',
        name: 'last_name',
        type: 'text',
        validationRule: validateEmpty,
        invalidText: '이름을 입력하지 않았습니다',
      },
    ],
  },
  {
    order: 2,
    isActive: false,
    title: '전화번호 입력',
    description: '전화번호를 입력해주세요',
    fields: [
      {
        label: '전화번호',
        placeholder: '전화번호를 입력하세요',
        name: 'phone_number',
        type: 'text',
        validationRule: validatePhoneNumber,
        invalidText: '01012345678 과 같이 입력해주세요',
      },
    ],
  },
  {
    order: 3,
    isActive: false,
    title: '주민등록번호 입력',
    description: '주민등록번호를 입력해주세요',
    fields: [
      {
        label: '주민등록번호',
        placeholder: '주민등록번호를 입력하세요',
        name: 'identification_number',
        type: 'text',
        validationRule: validateIdentificationNumber,
        invalidText: '13자리의 주민등록번호를 입력해주세요',
      },
    ],
  },
  {
    order: 4,
    isActive: false,
    title: '주소 입력',
    description: '주소를 입력해주세요',
    fields: [
      {
        label: '주소',
        placeholder: '주소를 입력하세요',
        name: 'address',
        type: 'text',
        validationRule: validateEmpty,
        invalidText: '주소를 입력해주세요',
      },
    ],
  },
];

export default INITIAL_STEPPER;
