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

  P_APPLICANT_PERSONS$occupation: "",
  P_APPLICANT_PERSONS$industry: "",
  P_APPLICANT_PERSONS$emplmtFormCode: "",
  P_APPLICANT_PERSONS$office_name_kanji: "",
  P_APPLICANT_PERSONS$department: "",
  P_APPLICANT_PERSONS$office_phone_number: "",
  P_APPLICANT_PERSONS$number_of_employee: "",
  P_APPLICANT_PERSONS$employment_started_date:"",
  P_APPLICANT_PERSONS$last_year_income:"",
  P_APPLICANT_PERSONS$income_source:"",
};

export default function StepID03() {
  const theme = useTheme();

  const [data, setData] = useState(initData);

  const [tempErorr, setTempErorr] = useState({});
  const [erorr, setErorr] = useState({});

  return (
    <Container maxWidth="md">
      <BigTitle
        title="あなたのご職業について教えてください。"
        marginTop="166px"
      />
      <Group title="ご職業">
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
          spacing="12px"
        >
          <Select
            config={[
              {
                id: 1,
                value: "",
                comment: "----",
              },
              {
                id: 2,
                value: "2",
                comment: "01月/07月",
              },
              {
                id: 3,
                value: "3",
                comment: "02月/08月",
              },
              {
                id: 4,
                value: "4",
                comment: "03月/09月",
              },
              {
                id: 5,
                value: "5",
                comment: "04月/10月",
              },
              {
                id: 6,
                value: "6",
                comment: "05月/11月",
              },
              {
                id: 7,
                value: "7",
                comment: "06月/12月",
              },
            ]}
            value={data.P_APPLICANT_PERSONS$occupation}
            onChange={(value) =>
              setData({
                ...data,
                P_APPLICANT_PERSONS$occupation: value,
              })
            }
            width="100%"
          />
          <TipsText
            text="ご職業は必須です。"
            isErorr={!Boolean(data.P_APPLICANT_PERSONS$first_name_kanji)}
          />
        </Stack>
      </Group>

      <Group title="業種">
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
          spacing="12px"
        >
          <Select
            config={[
              {
                id: 1,
                value: "",
                comment: "----",
              },
              {
                id: 2,
                value: "2",
                comment: "01月/07月",
              },
              {
                id: 3,
                value: "3",
                comment: "02月/08月",
              },
              {
                id: 4,
                value: "4",
                comment: "03月/09月",
              },
              {
                id: 5,
                value: "5",
                comment: "04月/10月",
              },
              {
                id: 6,
                value: "6",
                comment: "05月/11月",
              },
              {
                id: 7,
                value: "7",
                comment: "06月/12月",
              },
            ]}
            value={data.P_APPLICANT_PERSONS$industry}
            onChange={(value) =>
              setData({
                ...data,
                P_APPLICANT_PERSONS$industry: value,
              })
            }
            width="100%"
          />
          <TipsText
            text="業種は必須です。"
            isErorr={!Boolean(data.P_APPLICANT_PERSONS$industry)}
          />
        </Stack>
      </Group>

      <Group title="職種">
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
          spacing="12px"
        >
          <Select
            config={[
              {
                id: 1,
                value: "",
                comment: "----",
              },
              {
                id: 2,
                value: "2",
                comment: "01月/07月",
              },
              {
                id: 3,
                value: "3",
                comment: "02月/08月",
              },
              {
                id: 4,
                value: "4",
                comment: "03月/09月",
              },
              {
                id: 5,
                value: "5",
                comment: "04月/10月",
              },
              {
                id: 6,
                value: "6",
                comment: "05月/11月",
              },
              {
                id: 7,
                value: "7",
                comment: "06月/12月",
              },
            ]}
            value={data.P_APPLICANT_PERSONS$emplmtFormCode}
            onChange={(value) =>
              setData({
                ...data,
                P_APPLICANT_PERSONS$emplmtFormCode: value,
              })
            }
            width="100%"
          />
          <TipsText
            text="職種は必須です。"
            isErorr={!Boolean(data.P_APPLICANT_PERSONS$emplmtFormCode)}
          />
        </Stack>
      </Group>

      <Group title="勤務先名">
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
          spacing="12px"
        >
          <TextField
            placeholder="例：株式会社○○○○○"
            fullWidth
            onChange={(e) =>
              setData({
                ...data,
                P_APPLICANT_PERSONS$office_name_kanji: e.target.value,
              })
            }
          />

          <TipsText
            text="勤務先名は必須です。"
            isErorr={!Boolean(data.P_APPLICANT_PERSONS$office_name_kanji)}
          />
        </Stack>
      </Group>

      <Group title="所属部課">
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
          spacing="12px"
        >
          <TextField
            placeholder="例：○○部"
            fullWidth
            onChange={(e) =>
              setData({
                ...data,
                P_APPLICANT_PERSONS$department: e.target.value,
              })
            }
          />

          <TipsText text="所属部課が無い方は「なし」とご入力ください。" />
          <TipsText
            text="所属部課は必須です。"
            isErorr={!Boolean(data.P_APPLICANT_PERSONS$department)}
          />
        </Stack>
      </Group>

      <Group title="勤務先の電話番号">
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
          spacing="12px"
        >
          <TextField
            placeholder="例：0312345678"
            fullWidth
            onChange={(e) =>
              setData({
                ...data,
                P_APPLICANT_PERSONS$office_phone_number: e.target.value,
              })
            }
          />
          <TipsText text="半角数字・ハイフンなしでご入力ください。" />
          <TipsText text="現在所属する部署の電話番号をご入力ください。" />
          <TipsText
            text="勤務先の電話番号は必須です。"
            isErorr={!Boolean(data.P_APPLICANT_PERSONS$office_phone_number)}
          />
        </Stack>
      </Group>

      <Group title="従業員数">
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
          spacing="12px"
        >
          <Stack direction="row"
          justifyContent="center"
          alignItems="center"
          spacing="12px">
            <TextField
              placeholder="0"
              fullWidth
              onChange={(e) =>
                setData({
                  ...data,
                  P_APPLICANT_PERSONS$number_of_employee: e.target.value,
                })
              }
              sx={{ width:"156px" }}
            />
            <Typography
              sx={{
                marginTop: "10px",
                fontWeight: 300,
                fontSize: "16px",
              }}
            >
              名
            </Typography>
          </Stack>

          <TipsText
            text="従業員数は必須です。"
            isErorr={!Boolean(data.P_APPLICANT_PERSONS$number_of_employee)}
          />
        </Stack>
      </Group>

      <Group title="入社年月（事業を開始した年月）">
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
          spacing="12px"
        >
          <YmPicker
            onChange={(date) =>
              setData({
                ...data,
                P_APPLICANT_PERSONS$employment_started_date: date,
              })
            }
          />
        </Stack>
      </Group>
      <Group title="ご年収">
      <Box
          sx={{
            border: `1px solid ${theme.palette.primary.main}`,
            borderRadius: "8px",
            boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.05)",
          }}
        >
          <Group title="前年度年収" borderRadius="8px 8px 0px 0px">
          <Stack
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
          spacing="12px"
        >
          <Stack direction="row"
          justifyContent="center"
          alignItems="center"
          spacing="12px">
            <TextField
              placeholder="0"
              fullWidth
              onChange={(e) =>
                setData({
                  ...data,
                  P_APPLICANT_PERSONS$last_year_income: e.target.value,
                })
              }
              sx={{ width:"156px" }}
            />
            <Typography
              sx={{
                marginTop: "10px",
                fontWeight: 300,
                fontSize: "16px",
              }}
            >
              名
            </Typography>
          </Stack>

          <TipsText
            text="前年度年収は必須です。"
            isErorr={!Boolean(data.P_APPLICANT_PERSONS$last_year_income)}
          />
        </Stack>
          </Group>
          <Group title="仮審査を申し込む金融機関を選択してください。※複数選択可">
        <Box
          sx={{
            paddingY: "10px",
            paddingX: "8px",
            border: `1px solid ${
              data.P_APPLICANT_PERSONS$income_source.length > 0
                ? theme.palette.primary.main
                : theme.palette.primary.lighter
            }`,
            borderRadius: "14px",
            background: theme.palette.common.white,
            boxShadow:
              data.P_APPLICANT_PERSONS$income_source.length > 0
                ? "none"
                : "0px 0px 15px rgba(60, 72, 196, 0.1)",
          }}
        >
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
            spacing="4px"
          >
            <Checkbox
              lable="住信SBIネット銀行"
              onChange={(e) => {
                if (e.target.checked) {
                  let temp = data.P_APPLICANT_PERSONS$income_source;
                  temp.push(1);
                  setData({
                    ...data,
                    P_APPLICANT_PERSONS$income_source: Array.from(
                      new Set(temp)
                    ),
                  });
                } else {
                  let temp = data.P_APPLICANT_PERSONS$income_source;
                  setData({
                    ...data,
                    P_APPLICANT_PERSONS$income_source: temp.filter(
                      (item) => item !== 1
                    ),
                  });
                }
              }}
            />
            
          </Stack>
        </Box>
      </Group>
        </Box>

      </Group>
      <Group title="現在、出向（派遣）していますか？">
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
                lable: "はい",
              },
              {
                id: 2,
                value: 2,
                lable: "いいえ",
              },
            ]}
            onChange={(value) => {
              setData({
                ...data,
                P_APPLICANT_PERSONS$sex: value,
              });
            }}
          />
        </Stack>
      </Group>

      <Box height="100px" />
    </Container>
  );
}
