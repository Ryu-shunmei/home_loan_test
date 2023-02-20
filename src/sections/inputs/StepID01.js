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
// ----------------------------------------------------------------------
const today = new Date();
const initData = {
  P_APPLICATION_HEADERS$loan_apply_date: null,
  P_APPLICATION_HEADERS$scheduled_date_moving: null,
  P_APPLICATION_BANKS$s_master_bank_id: [],
  P_APPLICATION_HEADERS$loan_target: "",
  P_APPLICATION_HEADERS$loan_type: "",
  P_BORROWING_DETAILS$loan_desired_borrowing_date: null,
  P_BORROWING_DETAILS$temporary_desired_loan_amount: "",
  P_BORROWING_DETAILS$halfyear_bonus: "",
  P_BORROWING_DETAILS$desired_monthly_bonus: "",
  P_BORROWING_DETAILS$loan_term: "",
  P_BORROWING_DETAILS$repayment_method: "",
};

export default function StepID01() {
  const theme = useTheme();

  const [data, setData] = useState(initData);

  const [tempErorr, setTempErorr] = useState({});
  const [erorr, setErorr] = useState({});

  return (
    <Container maxWidth="md">
      <BigTitle
        title="まずは、お借入のご希望をお聞かせください。"
        marginTop="72px"
      />
      <Group title="申込日兼同意日">
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
          spacing="12px"
        >
          <DatePicker
            onChange={(date) =>
              setData({ ...data, P_APPLICATION_HEADERS$loan_apply_date: date })
            }
          />
          <TipsText
            text="申込日兼同意日は必須です。"
            isErorr={!Boolean(data.P_APPLICATION_HEADERS$loan_apply_date)}
          />
        </Stack>
      </Group>
      <Group title="入居予定年月">
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
                P_APPLICATION_HEADERS$scheduled_date_moving: date,
              })
            }
          />
          <TipsText
            text="入居予定年月は必須です。"
            isErorr={!Boolean(data.P_APPLICATION_HEADERS$scheduled_date_moving)}
          />
        </Stack>
      </Group>
      <Group title="仮審査を申し込む金融機関を選択してください。※複数選択可">
        <Box
          sx={{
            paddingY: "10px",
            paddingX: "8px",
            border: `1px solid ${
              data.P_APPLICATION_BANKS$s_master_bank_id.length > 0
                ? theme.palette.primary.main
                : theme.palette.primary.lighter
            }`,
            borderRadius: "14px",
            background: theme.palette.common.white,
            boxShadow:
              data.P_APPLICATION_BANKS$s_master_bank_id.length > 0
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
                  let temp = data.P_APPLICATION_BANKS$s_master_bank_id;
                  temp.push(1);
                  setData({
                    ...data,
                    P_APPLICATION_BANKS$s_master_bank_id: Array.from(
                      new Set(temp)
                    ),
                  });
                } else {
                  let temp = data.P_APPLICATION_BANKS$s_master_bank_id;
                  setData({
                    ...data,
                    P_APPLICATION_BANKS$s_master_bank_id: temp.filter(
                      (item) => item !== 1
                    ),
                  });
                }
              }}
            />
            <Checkbox
              lable="MCJ（日本住宅ローン）"
              onChange={(e) => {
                if (e.target.checked) {
                  let temp = data.P_APPLICATION_BANKS$s_master_bank_id;
                  temp.push(2);
                  setData({
                    ...data,
                    P_APPLICATION_BANKS$s_master_bank_id: Array.from(
                      new Set(temp)
                    ),
                  });
                } else {
                  let temp = data.P_APPLICATION_BANKS$s_master_bank_id;
                  setData({
                    ...data,
                    P_APPLICATION_BANKS$s_master_bank_id: temp.filter(
                      (item) => item !== 2
                    ),
                  });
                }
              }}
            />
          </Stack>
        </Box>
      </Group>
      <Group title="お借入の目的">
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
          spacing="12px"
        >
          <Box width="100%">
            <RadioGroup
              value={data.P_APPLICATION_HEADERS$loan_target}
              config={[
                {
                  id: 1,
                  value: 1,
                  lable: "物件の購入・建築",
                },
                {
                  id: 2,
                  value: 2,
                  lable: "お借り換え",
                },
                {
                  id: 3,
                  value: 3,
                  lable: "増改築（借り換え有）",
                },
              ]}
              onChange={(value) => {
                setData({
                  ...data,
                  P_APPLICATION_HEADERS$loan_target: value,
                });
              }}
            />
          </Box>

          <TipsText
            text="お借入の目的は必須です。"
            isErorr={!Boolean(data.P_APPLICATION_HEADERS$loan_target)}
          />
        </Stack>
      </Group>
      <Group title="資金の使いみち">
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
          spacing="12px"
        >
          <Box width="100%">
            <RadioGroup
              value={data.P_APPLICATION_HEADERS$loan_target}
              config={[
                {
                  id: 4,
                  value: 4,
                  lable: "建売住宅の購入",
                },
                {
                  id: 5,
                  value: 5,
                  lable: "中古住宅の購入",
                },
                {
                  id: 6,
                  value: 6,
                  lable: "新築マンションの購入",
                },
                {
                  id: 7,
                  value: 8,
                  lable: "中古マンションの購入",
                },
                {
                  id: 9,
                  value: 9,
                  lable: "建物だけ新築(既に土地をお持ちの方)",
                },
                {
                  id: 10,
                  value: 10,
                  lable: "土地を購入後に建物新築",
                },
              ]}
              onChange={(value) => {
                setData({
                  ...data,
                  P_APPLICATION_HEADERS$loan_target: value,
                });
              }}
            />
          </Box>

          <TipsText
            text="資金の使いみちは必須です。"
            isErorr={!Boolean(data.P_APPLICATION_HEADERS$loan_target)}
          />
        </Stack>
      </Group>
      <Group title="お借入形態">
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
          spacing="12px"
        >
          <Box width="100%">
            <RadioGroup
              value={data.P_APPLICATION_HEADERS$loan_type}
              config={[
                {
                  id: 1,
                  value: 1,
                  lable: "おひとり",
                },
                {
                  id: 2,
                  value: 2,
                  lable: "ペアローン",
                },
                {
                  id: 3,
                  value: 3,
                  lable: "収入合算（持分あり）",
                },
                {
                  id: 4,
                  value: 4,
                  lable: "収入合算（持分なし）",
                },
              ]}
              onChange={(value) => {
                setData({
                  ...data,
                  P_APPLICATION_HEADERS$loan_type: value,
                });
              }}
            />
          </Box>

          <TipsText
            text="お借入形態は必須です。"
            isErorr={!Boolean(data.P_APPLICATION_HEADERS$loan_type)}
          />
        </Stack>
      </Group>
      <Group title="お借入内容">
        <Box
          sx={{
            border: `1px solid ${theme.palette.primary.main}`,
            borderRadius: "8px",
            boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.05)",
          }}
        >
          <Group title="お借入希望日" borderRadius="8px 8px 0px 0px">
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="flex-start"
              spacing="12px"
            >
              <DatePicker
                onChange={(date) =>
                  setData({
                    ...data,
                    P_BORROWING_DETAILS$loan_desired_borrowing_date: date,
                  })
                }
              />
              <TipsText
                text="お借入希望日は必須です。"
                isErorr={
                  !Boolean(data.P_BORROWING_DETAILS$loan_desired_borrowing_date)
                }
              />
            </Stack>
          </Group>
          <Group title="お借入希望額">
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="flex-start"
              spacing="12px"
            >
              <Stack
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing="8px"
              >
                <TextField
                  placeholder="0"
                  onChange={(date) =>
                    setData({
                      ...data,
                      P_BORROWING_DETAILS$temporary_desired_loan_amount: date,
                    })
                  }
                  sx={{ width: "156px" }}
                />
                <Typography>万円</Typography>
                <TipsText
                  text="10万円単位"
                  isErorr={
                    !Boolean(
                      data.P_BORROWING_DETAILS$temporary_desired_loan_amount
                    )
                  }
                />
              </Stack>

              <TipsText
                text="お借入希望額は必須です。"
                isErorr={
                  !Boolean(
                    data.P_BORROWING_DETAILS$temporary_desired_loan_amount
                  )
                }
              />
            </Stack>

            <Stack
              direction="column"
              justifyContent="center"
              alignItems="flex-start"
              spacing="6px"
            >
              <Typography
                sx={{
                  marginTop: "10px",
                  fontWeight: 300,
                  fontSize: "16px",
                }}
              >
                うち、ボーナス返済分
              </Typography>
              <Stack
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing="8px"
              >
                <TextField
                  placeholder="0"
                  onChange={(date) =>
                    setData({
                      ...data,
                      P_BORROWING_DETAILS$halfyear_bonus: date,
                    })
                  }
                  sx={{ width: "156px" }}
                />
                <Typography>万円</Typography>
                <TipsText
                  text="10万円単位"
                  isErorr={!Boolean(data.P_BORROWING_DETAILS$halfyear_bonus)}
                />
              </Stack>
            </Stack>

            <Stack
              direction="column"
              justifyContent="center"
              alignItems="flex-start"
              spacing="6px"
            >
              <Typography
                sx={{
                  marginTop: "10px",
                  fontWeight: 300,
                  fontSize: "16px",
                }}
              >
                ボーナス返済月
              </Typography>
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
                value={data.P_BORROWING_DETAILS$desired_monthly_bonus}
                onChange={(value) =>
                  setData({
                    ...data,
                    P_BORROWING_DETAILS$desired_monthly_bonus: value,
                  })
                }
                width="156px"
              />
            </Stack>
          </Group>
          <Group title="お借入期間">
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="flex-start"
              spacing="12px"
            >
              <Stack
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing="8px"
              >
                <Select
                  config={[
                    {
                      id: 1,
                      value: "",
                      comment: "--",
                    },
                    {
                      id: 2,
                      value: "1",
                      comment: "1",
                    },
                  ]}
                  value={data.P_BORROWING_DETAILS$loan_term}
                  onChange={(value) =>
                    setData({
                      ...data,
                      P_BORROWING_DETAILS$loan_term: value,
                    })
                  }
                  width="74px"
                />
                <Typography>年</Typography>
              </Stack>
              <TipsText
                text="お借入期間は必須です。"
                isErorr={!Boolean(data.P_BORROWING_DETAILS$loan_term)}
              />
            </Stack>
          </Group>
          <Group title="返済方法">
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="flex-start"
              spacing="12px"
            >
              <Box width="100%">
                <RadioGroup
                  value={data.P_APPLICATION_HEADERS$repayment_method}
                  config={[
                    {
                      id: 1,
                      value: 1,
                      lable: "元利均等返済",
                    },
                    {
                      id: 2,
                      value: 2,
                      lable: "元金均等返済",
                    },
                  ]}
                  onChange={(value) => {
                    setData({
                      ...data,
                      P_APPLICATION_HEADERS$repayment_method: value,
                    });
                  }}
                />
              </Box>

              <TipsText
                text="返済方法は必須です。"
                isErorr={!Boolean(data.P_APPLICATION_HEADERS$repayment_method)}
              />
            </Stack>
          </Group>
        </Box>
      </Group>
      <Group title="担保提供者がいる方のみ、チェックをつけてください。">
        <Box
          sx={{
            paddingY: "10px",
            paddingX: "8px",
            border: `1px solid ${
              data.P_APPLICATION_BANKS$s_master_bank_id.length > 0
                ? theme.palette.primary.main
                : theme.palette.primary.lighter
            }`,
            borderRadius: "14px",
            background: theme.palette.common.white,
            boxShadow:
              data.P_APPLICATION_BANKS$s_master_bank_id.length > 0
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
              lable="いる"
              onChange={(e) => {
                if (e.target.checked) {
                  let temp = data.P_APPLICATION_BANKS$s_master_bank_id;
                  temp.push(1);
                  setData({
                    ...data,
                    P_APPLICATION_BANKS$s_master_bank_id: Array.from(
                      new Set(temp)
                    ),
                  });
                } else {
                  let temp = data.P_APPLICATION_BANKS$s_master_bank_id;
                  setData({
                    ...data,
                    P_APPLICATION_BANKS$s_master_bank_id: temp.filter(
                      (item) => item !== 1
                    ),
                  });
                }
              }}
            />
          </Stack>
        </Box>
      </Group>
      <Group title="住信SBIネット銀行の「住宅ローンプラス」を申し込みますか？">
        <Box
          sx={{
            paddingY: "10px",
            paddingX: "8px",
            border: `1px solid ${
              data.P_APPLICATION_BANKS$s_master_bank_id.length > 0
                ? theme.palette.primary.main
                : theme.palette.primary.lighter
            }`,
            borderRadius: "14px",
            background: theme.palette.common.white,
            boxShadow:
              data.P_APPLICATION_BANKS$s_master_bank_id.length > 0
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
              lable="申し込む"
              onChange={(e) => {
                if (e.target.checked) {
                  let temp = data.P_APPLICATION_BANKS$s_master_bank_id;
                  temp.push(1);
                  setData({
                    ...data,
                    P_APPLICATION_BANKS$s_master_bank_id: Array.from(
                      new Set(temp)
                    ),
                  });
                } else {
                  let temp = data.P_APPLICATION_BANKS$s_master_bank_id;
                  setData({
                    ...data,
                    P_APPLICATION_BANKS$s_master_bank_id: temp.filter(
                      (item) => item !== 1
                    ),
                  });
                }
              }}
            />
          </Stack>
        </Box>
      </Group>
      <Box height="100px"/>
    </Container>
  );
}
