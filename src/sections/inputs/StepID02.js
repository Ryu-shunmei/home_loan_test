import { useState } from "react";
// @mui
import { useTheme } from "@mui/material/styles";
import {
  Box,
  Container,
  Stack,
  TextField,
  Typography,
  MenuItem,
  FormControl,
  Radio,
} from "@mui/material";
// components
import BigTitle from "src/components/big-title";
import Group from "src/components/grooup";
import TipsText from "src/components/tip-text";
import DatePicker from "src/components/date-picker";
import YmPicker from "src/components/ym-picker";
import Checkbox from "src/components/checkbox";
import RadioGroup from "src/components/radio-group";
import Select from "src/components/select";
import Choose1In2 from "src/components/choose";
// ----------------------------------------------------------------------
const today = new Date();
const initData = {
  P_APPLICANT_PERSONS$last_name_kana: "",
  P_APPLICANT_PERSONS$first_name_kana: "",
  P_APPLICANT_PERSONS$last_name_kanji: "",
  P_APPLICANT_PERSONS$first_name_kanji: "",
  P_APPLICANT_PERSONS$sex: "",
  P_APPLICANT_PERSONS$birthday: "",
  P_APPLICANT_PERSONS$home_phone_number: "",
  P_APPLICANT_PERSONS$mobile_phone_number: "",
  P_APPLICANT_PERSONS$owner_email: "",
};

export default function StepID02() {
  const theme = useTheme();

  const [data, setData] = useState(initData);

  const [tempErorr, setTempErorr] = useState({});
  const [erorr, setErorr] = useState({});

  return (
    <Container maxWidth="md">
      <BigTitle title="あなたについて教えてください。" marginTop="166px" />
      <Group title="お名前">
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
          spacing="12px"
        >
          <TextField
            placeholder="姓"
            fullWidth
            onChange={(e) =>
              setData({
                ...data,
                P_APPLICANT_PERSONS$last_name_kanji: e.target.value,
              })
            }
          />
          <TextField
            placeholder="名"
            fullWidth
            onChange={(e) =>
              setData({
                ...data,
                P_APPLICANT_PERSONS$first_name_kanji: e.target.value,
              })
            }
          />
          <TipsText text="外国籍のかたは、在留カード通りに入力ください。" />
          <TipsText text="お名前の漢字が外字等で変換できない場合は常用漢字でご入力ください。" />
          <TipsText
            text="姓は必須です。"
            isErorr={!Boolean(data.P_APPLICANT_PERSONS$last_name_kanji)}
          />
          <TipsText
            text="名は必須です。"
            isErorr={!Boolean(data.P_APPLICANT_PERSONS$first_name_kanji)}
          />
        </Stack>
      </Group>
      <Group title="お名前お名前（フリガナ）">
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
          spacing="12px"
        >
          <TextField
            placeholder="セイ"
            fullWidth
            onChange={(e) =>
              setData({
                ...data,
                P_APPLICANT_PERSONS$last_name_kana: e.target.value,
              })
            }
          />
          <TextField
            placeholder="名"
            fullWidth
            onChange={(e) =>
              setData({
                ...data,
                P_APPLICANT_PERSONS$first_name_kana: e.target.value,
              })
            }
          />
          <TipsText
            text="セイは必須です。"
            isErorr={!Boolean(data.P_APPLICANT_PERSONS$last_name_kana)}
          />
          <TipsText
            text="メイは必須です。"
            isErorr={!Boolean(data.P_APPLICANT_PERSONS$first_name_kana)}
          />
        </Stack>
      </Group>
      <Group title="性別">
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
          spacing="12px"
        >
          <Choose1In2
            value={data.P_APPLICANT_PERSONS$sex}
            config={[
              {
                id: 1,
                value: 1,
                lable: "男性",
              },
              {
                id: 2,
                value: 2,
                lable: "女性",
              },
            ]}
            onChange={(value) => {
              setData({
                ...data,
                P_APPLICANT_PERSONS$sex: value,
              });
            }}
          />
          <TipsText
            text="性別は必須です。"
            isErorr={!Boolean(data.P_APPLICANT_PERSONS$sex)}
          />
        </Stack>
      </Group>
      <Group title="生年月日">
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
          spacing="12px"
        >
          <DatePicker
            onChange={(date) =>
              setData({ ...data, P_APPLICANT_PERSONS$birthday: date })
            }
          />
          <TipsText
            text="生年月日は必須です。"
            isErorr={!Boolean(data.P_APPLICANT_PERSONS$birthday)}
          />
        </Stack>
      </Group>
      <Group title="現在の国籍">
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
          spacing="12px"
        >
          <Choose1In2
            value={data.P_APPLICANT_PERSONS$nationality}
            config={[
              {
                id: 1,
                value: 1,
                lable: "日本国籍",
              },
              {
                id: 2,
                value: 2,
                lable: "外国籍",
              },
            ]}
            onChange={(value) => {
              setData({
                ...data,
                P_APPLICANT_PERSONS$nationality: value,
              });
            }}
          />
        </Stack>
      </Group>

      <Group title="電話番号">
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
          spacing="12px"
        >
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
            spacing="5px"
          >
            <Typography
              sx={{
                fontWeight: 300,
                fontSize: "16px",
              }}
            >
              携帯
            </Typography>
            <TextField
              placeholder="例：09012345678"
              value={data.P_APPLICANT_PERSONS$mobile_phone_number}
              onChange={(e) => {
                setData({
                  ...data,
                  P_APPLICANT_PERSONS$mobile_phone_number: e.target.value,
                });
              }}
            />
          </Stack>
          <TipsText
            text="半角数字・ハイフンなしでご入力ください。"
          />
          <TipsText
            text="携帯は必須です。"
            isErorr={!Boolean(data.P_APPLICANT_PERSONS$mobile_phone_number)}
          />
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
            spacing="5px"
          >
            <Typography
              sx={{
                fontWeight: 300,
                fontSize: "16px",
              }}
            >
              自宅
            </Typography>
            <TextField
              placeholder="例：0312345678"
              value={data.P_APPLICANT_PERSONS$home_phone_number}
              onChange={(e) => {
                setData({
                  ...data,
                  P_APPLICANT_PERSONS$home_phone_number: e.target.value,
                });
              }}
            />
          </Stack>
          <TipsText
            text="半角数字・ハイフンなしでご入力ください。"
          />
          <TipsText
            text="自宅は必須です。"
            isErorr={!Boolean(data.P_APPLICANT_PERSONS$home_phone_number)}
          />
        </Stack>
      </Group>

      <Group title="ご連絡先用メールアドレス">
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
          spacing="12px"
        >
          <TextField
            placeholder="メールアドレス"
            value={data.P_APPLICANT_PERSONS$owner_email}
            onChange={(e) => {
              setData({
                ...data,
                P_APPLICANT_PERSONS$owner_email: e.target.value,
              });
            }}
          />
          <TipsText
            text="ご連絡先用メールアドレスは必須です。"
            isErorr={!Boolean(data.P_APPLICANT_PERSONS$owner_email)}
          />
        </Stack>
      </Group>

      <Box height="100px" />
    </Container>
  );
}
